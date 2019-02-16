import resolveChunks from '../Resolvable'
import {
  Matcher,
  MatcherIterator,
  ResolvableMatcher,
} from '../Matcher'
import { NaviRequest } from '../NaviRequest'

export function map<Context extends object>(
  resolvableMatcher: ResolvableMatcher<Context>,
): Matcher<Context> {
  return () => function* mapMatcherGenerator(
    request: NaviRequest,
    context: Context
  ): MatcherIterator {
    yield* resolveChunks(
      resolvableMatcher,
      request,
      context,
      (childMatcher) => childMatcher()(request, context)
    )
  }
}
