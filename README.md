<p align="center">
  <a href="https://github.com/foxundermoon/wechat-work-action"><img alt="wechat-work-action status" src="https://github.com/foxundermoon/wechat-work-action/workflows/build-test/badge.svg"></a>
</p>

## ✨ Example Usage

- text

```yml
- name: text message
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
- name: post message
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: post
    content: |
      post:
        zh_cn:
          title: 我是一个标题
          content:
          - - tag: text
              un_escape: true
              text: '第一行&nbsp;:'
            - tag: a
              text: 超链接
              href: http://www.feishu.cn
            - tag: at
              user_id: ou_18eac85d35a26f989317ad4f02e8bbbb
          - - tag: text
              text: '第二行 :'
            - tag: text
              text: 文本测试
          - - tag: img
              image_key: d640eeea-4d2f-4cb3-88d8-c964fab53987
              width: 300
              height: 300
```

- share_chat

```yml
- name: share_chat message
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: share_chat
    content: |
      share_chat_id: oc_f5b1a7eb27ae2c7b6adc2a74faf339ff
```

- image

```yml
- name: image message
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: image
    content: |
      image_key: img_ecffc3b9-8f14-400f-a014-05eca1a4310g
```

- card

```yml
- name: card message
  uses: foxundermoon/feishu-action@v2
  with:
    url: ${{ secrets.FEISHU_BOT_WEBHOOK_URL }}
    msg_type: card
    content: |
      header:
        template: red
        title:
          content: "\U0001F514 叮～你有一封圣诞邀请函待查收 \U0001F381"
          tag: plain_text
      elements:
      - alt:
          content: ''
          tag: plain_text
        img_key: img_v2_fddd29cd-2846-4a03-aaed-d22878e503fg
        tag: img
      - tag: div
        text:
          content: "圣诞老人赶着麋鹿在平安夜悄悄光临办公楼，为大家带来了丰盛的下午茶～\U0001F385\nBUT...圣诞老人走得太急，忘记带礼物了！！\U0001F622\n\n为活跃办公室气氛，增加同事间情谊，我们将举办圣诞礼物交换派对～！\U0001F942"
          tag: lark_md
      - tag: div
        text:
          content: "**\U0001F384 圣诞派对时间：**12月24日 14:00-17:00\n\n**\U0001F381 礼物交换方式：**请各位小伙伴们在包装好你准备的礼物之后，附上卡片祝福语，在
            12 月 23 日下午 14:00 前交给前台，我们会统一交到圣诞老人手里～"
          tag: lark_md
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
