# castlehard.com

Plain markdown website for Luca Burghard.

## Add a page

Add a markdown file to `content/`:

```text
content/example.md
```

Run:

```sh
npm run build
```

It will deploy as:

```text
https://castlehard.com/example/
```

The generated plain-text menu is built from every `content/*.md` file. `content/main.md` is also deployed as the homepage.
