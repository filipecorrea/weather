/* eslint-disable no-template-curly-in-string */
import { expect } from 'chai'
import faker from 'faker'
import compile from '../../../src/localization/compile'

const randomName = faker.name.firstName()
const randomSentence = faker.lorem.sentence()
const randomWord = faker.lorem.word()

describe('Localization', () => {
  const compiled = compile({
    hello: 'Hello, ${person}!',
    sentence: randomSentence,
    one: {
      two: {
        three: '${word}'
      }
    }
  })

  it('compiles template', () => {
    const subject = compiled.hello({ person: randomName })
    expect(subject).to.equal(`Hello, ${randomName}!`)
  })

  it('compiles multi level templates', () => {
    const subject = compiled.one.two.three({ word: randomWord })
    expect(subject).to.equal(randomWord)
  })

  it('compiles text', () => {
    const subject = compiled.sentence()
    expect(subject).to.equal(randomSentence)
  })
})
