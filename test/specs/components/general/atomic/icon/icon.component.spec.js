import { shallowMount } from '@vue/test-utils'
import IconComponent from '@/components/general/atomic/icon/icon.component'

describe('Testing icon component in general component ', () => {
  it('render material icon', () => {
    const props = {
      type: 'material-icons'
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'edit'
      }
    })

    expect(wrapper.html()).toContain(
      '<i class="ef-icon material-icons">edit</i>'
    )
  })
  it('render fontawesome icon', () => {
    const props = {
      type: 'fontawesome'
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'far fa-address-book'
      }
    })

    expect(wrapper.html()).toContain(
      '<i class="ef-icon far fa-address-book"><!----></i>'
    )
  })
  it('render icon with font size is 50px', () => {
    const props = {
      type: 'fontawesome',
      fontSize: 50
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'far fa-address-book'
      }
    })

    expect(wrapper.element.style.fontSize).toBe('50px')
  })
  it('render icon with size is small', () => {
    const props = {
      type: 'fontawesome',
      size: 'small'
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'far fa-address-book'
      }
    })

    expect(wrapper.contains('.ef-icon--small')).toBe(true)
  })
  it('render icon with size is large', () => {
    const props = {
      type: 'fontawesome',
      size: 'large'
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'far fa-address-book'
      }
    })

    expect(wrapper.contains('.ef-icon--large')).toBe(true)
  })
  it('render icon with size is x-large', () => {
    const props = {
      type: 'fontawesome',
      size: 'x-large'
    }

    const wrapper = shallowMount(IconComponent, {
      propsData: props,
      slots: {
        default: 'far fa-address-book'
      }
    })

    expect(wrapper.contains('.ef-icon--x-large')).toBe(true)
  })
})
