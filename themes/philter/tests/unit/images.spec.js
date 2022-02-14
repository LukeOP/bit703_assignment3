import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Images.vue'

describe('Images.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'Latest Images'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
