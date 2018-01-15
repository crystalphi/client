// @flow
import * as I from 'immutable'
import * as Common from './common'
import * as Meta from './meta'
import * as Message from './message'

export type _State = {
  badgeMap: I.Map<Common.ConversationIDKey, number>,
  editingMap: I.Map<Common.ConversationIDKey, Message.Ordinal>, // current message being edited
  inboxFilter: string,
  isSearching: boolean,
  loadingMap: I.Map<string, number>, // reasons why we're loading
  messageMap: I.Map<Common.ConversationIDKey, I.Map<Message.Ordinal, Message.Message>>,
  messageOrdinals: I.Map<Common.ConversationIDKey, I.SortedSet<Message.Ordinal>>,
  metaMap: I.Map<Common.ConversationIDKey, Meta.ConversationMeta>,
  selectedConversation: Common.ConversationIDKey,
  typingMap: I.Map<Common.ConversationIDKey, I.Set<string>>,
  unreadMap: I.Map<Common.ConversationIDKey, number>,
  pendingOutboxToOrdinal: I.Map<Common.ConversationIDKey, I.Map<Message.OutboxID, Message.Ordinal>>,
}

export type State = I.RecordOf<_State>

export type {ConversationMeta, MetaTrustedState} from './meta'
export type {
  Message,
  MessageAttachment,
  MessageSystemGitPush,
  MessageSystemInviteAccepted,
  MessageSystemSimpleToComplex,
  MessageText,
  Ordinal,
  OutboxID,
} from './message'
export type {ConversationIDKey} from './common'

export {stringToOutboxID, numberToMessageID, numberToOrdinal, ordinalToNumber} from './message'
export {stringToConversationIDKey, conversationIDKeyToString} from './common'