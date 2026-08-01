import { applicationManager } from "./ApplicationManager";

type Props = {
    id: string;
};

function ApplicationRenderer({ id }: Props) {
    const app = applicationManager.getById(id);

    if (!app) {
        return (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
                Application not found.
            </div>
        );
    }

    const Component = app.component;

    return <Component />;
}

export default ApplicationRenderer;
