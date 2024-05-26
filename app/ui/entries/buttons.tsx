import { DocumentDuplicateIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteInvoice as deleteEntry } from "@/app/lib/actions";

export function CreateEntry() {
  return (
    <Link
      href="/dashboard/entries/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Eintrag anlegen</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateEntry({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/entries/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function CopyEntry({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/entries/${id}/copy`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <DocumentDuplicateIcon className="w-5" />
    </Link>
  );
}

export function DeleteEntry({ id }: { id: string }) {
  const deleteEntryWithId = deleteEntry.bind(null, id);

  return (
    <form action={deleteEntryWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
