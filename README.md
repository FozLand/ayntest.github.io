# www.ayntest.net pelican source files

These are the pelican source files for [ayntest.net](http://ayntest.net).


To work on this you will need the most recent stable version of [pelican](http://blog.getpelican.com/).  
From the optional dependencies of pelican, you will also need python-markdown.  
For automatically pushing the site to github with `make`, you will also need [ghb-import](https://github.com/davisp/ghp-import).  

## How to contribute

##### If you have access to the webserver
1. Clone the repo, `cd` into it.
2. Do `./develop_server.sh start`. This will preview the site at `localhost:8000`
3. Make changes, commit, push.
4. To upload to live site (github pages) do `make github`

##### If you don't have access to the webserver
Similar as above. Just fork the project on github, push your changes there, then make a pull request.  
Alternatively, just open an issue!
