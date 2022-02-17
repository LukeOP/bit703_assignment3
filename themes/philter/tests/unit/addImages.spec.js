import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/AddImage.vue'

describe('AddImage.vue', () => {
  it('renders AddImages', () => {
    const welcomeText = 'Add An Image'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
