import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "./icons.tsx";
import { FeedCardMemo, GithubAvatar } from "./FeedCard.tsx";
import type { FeedCard } from "./types.ts";

// ---------------------------------------------------------------------------
// 创作者页（子页面：由 App 的 viewStack 驱动，栈顶 owner 即当前页）
// ---------------------------------------------------------------------------

interface CreatorPageProps {
  owner: string;
  /** 该创作者的项目（调用方已按 score 降序） */
  projects: FeedCard[];
  likedSet: ReadonlySet<string>;
  dislikedSet: ReadonlySet<string>;
  isFollowing: boolean;
  onToggleFollow: (owner: string) => void;
  /** 项目卡片打开详情（overlay，与页面栈独立） */
  onOpen: (card: FeedCard, sourceEl?: HTMLElement) => void;
  /** 创作者页内项目卡片点其他 owner → 压栈（第二层） */
  onOpenCreator: (owner: string) => void;
  /** 返回（pop 一层） */
  onBack: () => void;
}

export function CreatorPage({
  owner,
  projects,
  likedSet,
  dislikedSet,
  isFollowing,
  onToggleFollow,
  onOpen,
  onOpenCreator,
  onBack,
}: CreatorPageProps) {
  // 关注提示：isFollowing 变化时显示/隐藏（关注 → 显示提示；取关 → 隐藏）
  const [followHint, setFollowHint] = useState(false);
  useEffect(() => {
    setFollowHint(isFollowing);
  }, [isFollowing]);

  return (
    <div className="creator-page">
      <button className="creator-back" onClick={onBack}>
        <ArrowLeft size={16} />
        返回
      </button>
      <div className="creator-header">
        <GithubAvatar owner={owner} size={128} className="creator-avatar" />
        <div className="creator-info">
          <div className="creator-name-row">
            <h2 className="creator-name">{owner}</h2>
            <a
              className="creator-github"
              href={`https://github.com/${owner}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              GitHub
            </a>
          </div>
          <button
            className={`creator-follow-btn${isFollowing ? " followed" : " following"}`}
            onClick={() => onToggleFollow(owner)}
          >
            {isFollowing ? "已关注" : "+ 关注"}
          </button>
          {followHint && (
            <div className="hint creator-follow-hint">
              已关注。TA 的项目和 TA star 过的库内项目会出现在关注频道（数据随每日更新）
            </div>
          )}
          <div className="creator-count">{projects.length} 个项目</div>
        </div>
      </div>
      <div className="creator-projects">
        {projects.length === 0 ? (
          <div className="status">
            <p>该创作者暂无入库项目</p>
          </div>
        ) : (
          <div className="feed-list">
            {projects.map((card) => (
              <FeedCardMemo
                key={card.repo}
                card={card}
                liked={likedSet.has(card.repo)}
                ignored={dislikedSet.has(card.repo)}
                onOpen={onOpen}
                onOpenCreator={onOpenCreator}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
