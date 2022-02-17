import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/updateimage.vue'

describe('UpdateImage.vue', () => {
  it('renders updateImage', () => {
    const welcomeText = 'Update This Image'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
