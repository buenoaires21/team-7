import re
import collections
import threading
import os

from urllib.parse import urljoin
from bs4 import BeautifulSoup
from collections import Counter

import pymongo
import cloudscraper


def get_areas_links(scraper, areas):
    subareas_links = []
    link_base = "https://www.zonajobs.com.ar/"
    for area in areas:
        area_link = urljoin(link_base, f'ofertas-de-empleo-area-{area.lower().replace(",", "").replace(" ","-")}.html')
        html = scraper.get(area_link).content
        parser_html = BeautifulSoup(html, 'html.parser')
        subareas_element = parser_html.find_all('div', {'class': 'area pb30'})
        for element in subareas_element:
            if element.find('div', {'class': 'filter-title'}).get_text() == 'Subárea':
                subareas_a_elements = element.find_all('a')
                for subarea in subareas_a_elements[:-1]:
                    areas[area].append(subarea.get_text())

    for area in areas:
        for subarea in areas[area]:
            link_subareas = urljoin(link_base, f'ofertas-de-empleo-subarea-{subarea.lower().replace(",", "").replace(" ","-")}.html')
            subareas_links.append(link_subareas)
    return subareas_links


def get_anuncios_links(scraper, subareas_links):
    anuncios_links = []
    for link in subareas_links:
        print(link)
        content = scraper.get(link).content
        soup = BeautifulSoup(content, 'html.parser')
        avisos = soup.find_all('div', {'class': 'aviso'})
        for aviso in avisos:
            if not 'bumeran' in aviso['id']:
                anuncios_links.append(urljoin('https://www.zonajobs.com.ar/',aviso['id']))
    return anuncios_links


def get_skills(scraper, anuncios_links, skills):
    most_used = []
    for anuncio in anuncios_links:
        content = scraper.get(anuncio).content
        soup = BeautifulSoup(content, 'html.parser')
        description = soup.find('div', {'class','aviso_description'})
        p_elements = description.find_all('p')
        description_text = ''
        for p in p_elements:
            description_text = description_text + p.get_text()
        for skill in skills:
            if skill in description_text:
                most_used.append(skill)
    return most_used


def connect_to_db():
    mongoclient = pymongo.MongoClient(os.environ.get('MONGO_STRING_CONNECTION'))
    db = mongoclient["SkillsSearch"]
    collection = db['skills']
    return collection


def search_skills_in_db(collection):
    skills = []
    documents = collection.find({})
    for document in documents:
        skills.append(document['skillName'])
    return skills


if __name__ == '__main__':
    scraper = cloudscraper.create_scraper()
    collection = connect_to_db()
    skills = search_skills_in_db(collection)
    areas = {'Comercial, Ventas y Negocios': [],'Administración, Contabilidad y Finanzas': [],'Tecnología, Sistemas y Telecomunicaciones': [],'Producción y Manufactura': [],'Oficios y Otros': [],'Abastecimiento y Logística': [],'Salud, Medicina y Farmacia': [],'Recursos Humanos y Capacitación': [],'Marketing y Publicidad': [],'Gastronomía y Turismo': [],'Atención al Cliente, Call Center y Telemarketing': [],'Ingenierías': [],'Ingeniería Civil y Construcción': [],'Aduana y Comercio Exterior': [],'Diseño': [],'Secretarias y Recepción': [],'Legales': [],'Educación, Docencia e Investigación': [],'Salud': [],'Comunicación, Relaciones Institucionales y Públicas': [],'Seguros': [],'Minería, Petróleo y Gas': []}
    subareas_links = get_areas_links(scraper, areas)
    anuncios_links = get_anuncios_links(scraper, subareas_links)
    most_used = get_skills(scraper, anuncios_links, skills)
    print(Counter(most_used))
