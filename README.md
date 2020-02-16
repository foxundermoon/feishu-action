<p align="center">
  <a href="https://github.com/foxundermoon/wechat-work-action"><img alt="wechat-work-action status" src="https://github.com/foxundermoon/wechat-work-action/workflows/build-test/badge.svg"></a>
</p>

## ✨ Example Usage

```yml
- name: ci status
  uses: foxundermoon/feishu-action@v1
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    title: notice
    text: |
      from github action test
      repository: ${{ github.repository }}
      committer: ${{ github.actor }}
      compare: ${{ github.event.compare }}
      job status: ${{ job.status }}
```

🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

Contexts and expression syntax for GitHub Actions, here: https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions#github-context

**Result**

## Options

| option | type   | description                                                               |
| ------ | ------ | ------------------------------------------------------------------------- |
| url    | string | webhook url: https://open.feishu.cn/open-apis/bot/hook/7c5a4a4ba83bxxxxxx |
| title  | string | message title                                                             |
| text   | string | message body                                                              |
