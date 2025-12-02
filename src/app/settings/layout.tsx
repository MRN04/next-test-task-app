import { SettingsSideBar } from "@/components/SettingsSideBar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      {children}
      <SettingsSideBar />
    </div>
  );
}