<p align="center">
  <a href="https://github.com/foxundermoon/wechat-work-action"><img alt="wechat-work-action status" src="https://github.com/foxundermoon/wechat-work-action/workflows/build-test/badge.svg"></a>
</p>

## ✨ Example Usage

```yml
- name: ci status
  uses: foxundermoon/wechat-work-action@v1
  with:
    url: ${{ secrets.WECHAT_WORK_WEBHOOK_URL }}
    type: markdown
    content: |
      ## action test
      > from github action test
      - repository: ${{ github.repository }}
      - committer: ${{ github.actor }}
      - compare: [view](${{ github.event.compare }})
      - job status: ${{ job.status }}
```

🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

Contexts and expression syntax for GitHub Actions, here: https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions#github-context

**Result**

## Options

| option  | type   | required | default | description                                                                              |
| ------- | ------ | -------- | ------- | ---------------------------------------------------------------------------------------- |
| url     | string | Yes      | none    | The full address of webhook: https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxxx |
| type    | string | No       | text    | message type，support (text,markdown,custom)                                             |
| content | string | Yes      | none    | Message content, text or markdown or json string                                         |
| at      | string | No       | none    | At user,Use commas to separate, for example: 13812345678,13898754321 or all              |

if type is custom, content is wecaht-work api json request body,for example

> content: {"msgtype": "text", "text": {"content": "我就是我, 是不一样的烟火"}}
