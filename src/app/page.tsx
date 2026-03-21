
import { Button } from "@/components/ui/button";
import { caller, getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";


export default async function Page() {
  // const users = await caller.getUsers();
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button> Click Me!</Button>
      {/* <p className="text-red-500 font-extrabold">Hello World!</p> */}
      {/* {JSON.stringify(users)} */}

<HydrationBoundary state={dehydrate(queryClient)}>
<Client />
</HydrationBoundary>

    </div>
  );
}
