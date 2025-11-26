import { PageHeader } from "@/components/PageHeader";
import { SettingsForm } from "@/components/SettingsForm";
import { SettingsSideBar } from "@/components/SettingsSideBar";

export default function Settings() {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full gap-6 py-4 lg:py-10 px-4 lg:px-8 overflow-auto">
        <PageHeader title="Settings" />
        <SettingsForm />
      </div>
      <SettingsSideBar />
    </div>
  );
}