import { cn, formatDate, timeAgo } from "src/lib/utils";
import { ActionableInsight } from "src/types/financials/message_financial_service";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface ActionableInsightCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  insight: ActionableInsight;
}

export function ActionableInsightCard({
  insight,
  className,
  ...props
}: ActionableInsightCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Card>
        <CardHeader>
          <div className="flex flex-1 gap-x-2">
            <CardTitle>Actionable Insight</CardTitle>
            <p></p>
          </div>

          <CardDescription>
            Generated as of {formatDate(insight.generatedTime!)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <ScrollArea className="h-[500px] px-1">
                  <Label htmlFor="framework">{insight.summarizedAction}</Label>
                </ScrollArea>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
}
