import { test, expect } from '@playwright/test'
import { get } from '../../../src/pages/[id]'

test('get product json', async () => {
    const response = await get({ params: { id: 'helmet' } })
    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toBe('application/json')
    expect(await response.json()).toBe('helmet')
})