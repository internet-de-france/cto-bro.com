# cto-bro.com

![cto bro website status](http://monitoshi.lexoyo.me/badge/1549656282912-5763)


## Notes

Types of pages

* languages are defined in a collection
* 404: the "not found page" redirects to the translated page depending on the browser language
* home page: redirects to the translated page depending on the browser language
* translated home pages: they have to be in located in `/home/[lang].md` (path) with a permalink set to `/[lang]`. This ensures that in **siteleaf CMS** all the new pages have the correct meta data for the editors to fill (see defaults field of [_config.yml](./_config.yml))

