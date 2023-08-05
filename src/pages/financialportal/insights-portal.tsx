import { Separator } from "@radix-ui/react-context-menu";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { ActionableInsightCard } from "src/components/insights";
import { PodcastEmptyPlaceholder } from "src/components/insights-empty-placeholder";
import { Menu } from "src/components/insights-menu";
import { Sidebar } from "src/components/insights-sidebar";

import { Avatar } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import { ScrollBar } from "src/components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { InsightsPortalLayout } from "src/layouts/insights-portal-layout";
import {
  selectCurrentSocialProfile,
  selectUserFinancialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

/**
 * Insights portal component that displays financial insights and metrics.
 * Renders a responsive layout with tabs for Insights and Metrics.
 */
export default function InsightsPortal() {
  const user = useAppSelector(selectCurrentSocialProfile);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const actionableInsights = financialProfile.actionableInsights;
  return (
    <InsightsPortalLayout>
      <div className="md:hidden">
        <Avatar className="block dark:hidden" />
        <Avatar className="hidden dark:block" />
      </div>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Insights
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Metrics</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Connect Bank Account
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Actions
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {actionableInsights.map((insight, idx) => (
                              <ActionableInsightCard
                                key={idx}
                                insight={insight}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="vertical" />
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personalized financial insights. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      {/* <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div> */}
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Weekly Insights
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Finding new ways to optimize your money. Updated
                            weekly.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InsightsPortalLayout>
  );
}
