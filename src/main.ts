import * as core from '@actions/core'
import got from 'got'
import yaml from 'js-yaml'


/** Supported push message format https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN#8b0f2a1b */
enum MsgType {
  Text = 'text',
  Post = 'post',
  Image = 'image',
  ShareChat = 'share_chat',
  Interactive = 'interactive'
}

/** Message */
interface Message {
  msg_type: string
  content: any
}

/** Interactive Message, for interactive msg_type */
interface InteractiveMessage {
  msg_type: string
  card: any
}

/** Send text/post/image/sharechat message */
async function postNormalMessage(msg_type: MsgType, content: string): Promise<string> {
  return await post({
    msg_type,
    content: yaml.load(content)
  })
}

/** Send interactive message */
async function postInteractiveMessage(msg_type: MsgType, cardContent: string): Promise<string> {
  
  return await post({
    msg_type,
    card: yaml.load(cardContent)
  })
}

async function postMessage(): Promise<string> {
  const msg_type = core.getInput('msg_type') as MsgType
  const content: string = core.getInput('content')

  switch (msg_type) {
    case MsgType.Text:
    case MsgType.Post:
    case MsgType.Image:
    case MsgType.ShareChat:
      return await postNormalMessage(msg_type, content)
    case MsgType.Interactive:
      return await postInteractiveMessage(msg_type, content)
    default: // fallback
      return await postNormalMessage(msg_type, content)
  }
}

async function post(body: Message | InteractiveMessage): Promise<string> {
  core.debug(JSON.stringify(body))

  const url: string = core.getInput('url')
  const rsp = await got.post(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  core.debug(rsp.body)
  return rsp.body
}

async function run(): Promise<void> {
  try {
    await postMessage()
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
