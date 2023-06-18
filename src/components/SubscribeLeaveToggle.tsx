"use client";
import { SubscribeToSubredditPayload } from "@/lib/validators/subreddit";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { Button } from "./ui/Button";

interface SubscribeLeaveToggleProps {
  subredditId: string;
}

const SubscribeLeaveToggle: FC<SubscribeLeaveToggleProps> = ({
  subredditId,
}) => {
  const isSubscribed = false;
  const {} = useMutation({
    mutationFn: async () => {
      const payload: SubscribeToSubredditPayload = {
        subredditId,
      };
      const { data } = await axios.post("/api/subreddit/subscribe", payload);
      return data as string;
    },
  });
  return isSubscribed ? (
    <Button className="w-full md-1 mb-4">Leave community</Button>
  ) : (
    <Button className="w-full md-1 mb-4">Join to post</Button>
  );
};

export default SubscribeLeaveToggle;
