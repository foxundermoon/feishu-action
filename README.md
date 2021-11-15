<p align="center">
  <a href="https://github.com/foxundermoon/wechat-work-action"><img alt="wechat-work-action status" src="https://github.com/foxundermoon/wechat-work-action/workflows/build-test/badge.svg"></a>
</p>

## ✨ Example Usage

- text

```yml
- name: ci status
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: text
    content: |
      text: |
        hahahah
        from github action test
        repository: ${{ github.repository }}
        committer: ${{ github.actor }}
        compare: ${{ github.event.compare }}
        job status: ${{ job.status }}
```

- post

```yml
- name: ci status
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: post
    content: |
      post:
        zh_cn:
          title: 项目更新通知
          content:
            - tag: text
              text: '项目有更新: '
            - tag: a
              text: 请查看
              href: ${{ github.repository }}
            - tag: at
              user_id: "ou_18eac8********17ad4f02e8bbbb"
```

- share_chat

```yml
- name: ci status
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: share_chat
    content: |
      share_chat_id: oc_f5b1a7eb27ae2c7b6adc2a74faf339ff
```

- image

```yml
- name: ci status
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: image
    content: |
      image_key: img_ecffc3b9-8f14-400f-a014-05eca1a4310g
```

🔐 Set your secrets here: `https://github.com/USERNAME/REPO/settings/secrets`.

Contexts and expression syntax for GitHub Actions, here: https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions#github-context

**Result**

## Options

| option   | type   | description                                                               |
| -------- | ------ | ------------------------------------------------------------------------- |
| url      | string | webhook url: https://open.feishu.cn/open-apis/bot/hook/7c5a4a4ba83bxxxxxx |
| msg_type | string | message type                                                              |
| content  | string | message content , yaml string                                             |

> [How do I use a robot in a group chat?](https://getfeishu.cn/hc/zh-cn/articles/360024984973-%E5%9C%A8%E7%BE%A4%E8%81%8A%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA)
