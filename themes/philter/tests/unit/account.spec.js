import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/home.vue'

describe('Home.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'Welcome To Philter'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
