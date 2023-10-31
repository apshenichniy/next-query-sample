import { Post } from "@prisma/client"
import { CalendarCheck, MessageCircle, User } from "lucide-react"

const Post: React.FC<{ data: Post }> = ({data: {id, author, title, text, createdAt}}) => {
  return (
    <div className="shadow-xs grid gap-2 rounded border border-gray-200 bg-slate-100 p-2">
      <div className="text-lg font-medium">{title}</div>
      <div>
        {text}
        ID: {id}
      </div>
      <div className="grid grid-cols-4 border-t pt-2 text-sm">
        <div className="col-span-2 flex items-center">
          <User size={20} className="mr-2" />{author}
        </div>
        <div className="flex items-center">
          <MessageCircle size={20} className="mr-2" />
          12
        </div>
        <div className="flex items-center">
          <CalendarCheck size={20} className="mr-2" />
          {createdAt?.toISOString()}
        </div>
      </div>
    </div>
  )
}

export { Post }
