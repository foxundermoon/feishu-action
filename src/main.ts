import * as core from '@actions/core'
import got from 'got'

enum MsgType {
  text = 'text',
  markdown = 'markdown',
  custom = 'custom'
}
async function postMessage(): Promise<string> {
  const type: MsgType = core.getInput('type') as MsgType
  const content: string = core.getInput('content')
  const at: string = core.getInput('at')

  if (type === MsgType.custom) {
    const payload = JSON.parse(content)
    return post(payload)
  }

  const payload = {
    msgtype: type,
    [type]: {
      content
    },
    mentioned_list: at.toLowerCase().includes('all') ? ['@all'] : at.split(',')
  }
  return post(payload)
}

async function post(body: object): Promise<string> {
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
    core.setFailed(error.message)
  }
}

run()
