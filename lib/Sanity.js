import Client from '@sanity/client'

export const client = Client({
    projectId: 'l14rt8wz',
    dataset: 'production',
    useCdn: false,
    apiVersion: '1',
})