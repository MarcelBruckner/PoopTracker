import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Invoice',
};

export default async function Page() {
    const customers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Einträge', href: '/dashboard/entries' },
                    {
                        label: 'Eintrag anlegen',
                        href: '/dashboard/entries/create',
                        active: true,
                    },
                ]}
            />
            <Form customers={customers} />
        </main>
    );
}