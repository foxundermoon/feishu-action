import * as core from '@actions/core'
import got from 'got'

interface Message {
  title: string
  text: string
}

async function postMessage(): Promise<string> {
  const title: string = core.getInput('title')
  const text: string = core.getInput('text')
  return await post({
    title,
    text
  })
}

async function post(body: Message): Promise<string> {
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
