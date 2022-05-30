import { mount } from '@vue/test-utils'
import HomePage from '../src/views/homePage.vue'
 
test('homePage.vue', async () => {
    const wrapper = mount(HomePage)
    expect(wrapper.vm.inputValue).toBe('')
    wrapper.vm.inputValue = 'Hello Word'
    expect(wrapper.vm.inputValue).toBe('Hello Word')
})