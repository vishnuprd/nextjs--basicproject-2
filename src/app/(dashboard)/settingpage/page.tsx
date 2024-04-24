import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Setting = () => {
  return (
    <div className="flex flex-col ml-[350px] mt-[10px] w-[700px]">
       <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">
    User Profile
    </h1>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your Profile Information</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="firstName">First Name</label>
                <Input id="firstName" placeholder="Enter your First Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="lastName">Last Name</label>
                <Input id="lastName" placeholder="Enter your Last Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email">Email</label>
                <Input id="email" placeholder="Enter your Email Address" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input id="phoneNumber" placeholder="Enter your Phone Number" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Save</Button>
          <Button variant="destructive">Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Setting;
