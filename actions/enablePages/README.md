<!--
  /!\ WARNING /!\
  This file's content is auto-generated, do NOT edit!
  All changes will be undone.
-->

# `enablePages`

Enable GitHub Pages on the learner's repository 

## Examples

Enable GitHub Pages on the `master` branch:

```yaml
type: enablePages
```

Enable GitHub Pages on the `gh-pages` branch:

```yaml
type: enablePages
branch: gh-pages
```

Enable GitHub Pages on the `/docs` folder of the `master` branch:

```yaml
type: enablePages
branch: master
path: /docs
```

## Options

| Title | Property | Description | Default | Required |
| :---- | :--- | :---------- | :------ | :------- |
| Branch | `branch` | The name of the branch to enable pages on. This defaults to `master`. | `master` |  |
| Path | `path` | The name of the folder that contains the pages site. This defaults to `/`. | `/` |  |

