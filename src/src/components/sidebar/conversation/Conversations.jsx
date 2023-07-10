import Conversation from "./Conversation.jsx"

export default function Conversations({}) {
  return (
    <div className="flex-1 overflow-y-auto py-2 scrollbar-none">
      <div className="flex flex-col gap-y-2">
        {Object.keys(Conversations).map(key => (
          <Conversation
            key={key + conversations[key].name}
            id={key}
            conversation={conversations[key]}
            active={key === conversationId}
          />
        ))}
      </div>
    </div>
  )
}
