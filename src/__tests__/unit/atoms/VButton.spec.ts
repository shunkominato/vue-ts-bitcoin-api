import { mount } from '@vue/test-utils'
import Component from '@atoms/VButton.vue'

describe('VButton.vue', () => {
    //propsを設定
    const btnName = '実行'
    const theme = 'primary'

    const wrapper = mount(Component, {
        propsData: { btnName, theme },
    })

    //テストidからdomを取得する際のutillメソッド
    const sel = (id: string): string => `[data-testid="${id}"]`

    test('ボタンクリック時にclickイベントが発火されること', () => {
        const button = wrapper.find(sel('test-btn'))
        button.trigger('click')
        expect(wrapper.emitted('click')).toBeTruthy()
    })
})
