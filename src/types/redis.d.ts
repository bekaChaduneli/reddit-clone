import { Vote } from "@prisma/client";

export type CachedPayload = {
    id: string;
    title: string;
    authorUsername: string;
    content: string;
    currentVote: Voteatype | null;
    createdAt: Date;
};
