import { UserCard } from "@/shared/ui/layout/popular-authors/UserCard";

export function PopularAuthors() {
  return (
    <div className="hidden invisible sm:flex sm:visible flex-col bg-secondary w-sidebar gap-2.5 p-4 rounded-sm">
      <span className="text-xl font-semibold">Popular authors</span>
      <UserCard
        avatarUrl={"https://github.com/danmaninc.png"}
        avatarFallback={"DA"}
        username={"@danmaninc"}
        description={"Frontend Developer & UX/UI"}
      />
      <UserCard
        avatarUrl={""}
        avatarFallback={"PE"}
        username={"@Petrel321"}
        description={"Frontend Developer"}
      />
      <UserCard
        avatarUrl={""}
        avatarFallback={"BA"}
        username={"@bakinasa"}
        description={"Frontend Developer"}
      />
      <UserCard
        avatarUrl={""}
        avatarFallback={"MO"}
        username={"@MonitorPC"}
        description={"Monitor+PC=LOVE"}
      />
      <UserCard
        avatarUrl={""}
        avatarFallback={"IL"}
        username={"@iliyasone"}
        description={"Frontend Developer"}
      />
      <UserCard
        avatarUrl={"https://github.com/duckduck-team.png"}
        avatarFallback={"DU"}
        username={"@duckduck"}
        description={"Best quacking solutions 🦆"}
      />
    </div>
  );
}
