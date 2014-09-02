#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'ayntest.net team'
SITENAME = 'ayntest.net'
SITESUBTITLE = 'Liberty Land Minetest'
SITEURL = ''

PATH = 'content'
THEME = 'themes/notmyidea'

TIMEZONE = 'UTC'

DEFAULT_LANG = 'en'

# Menu
MENUITEMS = ( 
            ("Graphs ->", "http://grafana.ayntest.net"),
            )

DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = True

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
#LINKS = (('Pelican', 'http://getpelican.com/'),
#         ('Python.org', 'http://python.org/'),
#         ('Jinja2', 'http://jinja.pocoo.org/'),
#         ('You can modify those links in your config file', '#'),
#)
LINKS = ()

# Social widget
SOCIAL = (
         ('twitter', 'https://twitter.com/m_ayntest'),
         ('edit this site on GitHub', 'https://github.com/ayntest/ayntest.net-website'),
         ('email', 'mailto:admin@ayntest.net'),
         )

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
