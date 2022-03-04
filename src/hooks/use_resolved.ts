
/* IMPORT */

import type {FN, ObservableAny} from '../types';
import isObservable from '../is_observable';
import {isFunction} from '../utils/lang';

/* MAIN */

type F<T> = T extends () => infer U ? U : T;
type O<T> = T extends ObservableAny<infer U> ? U : T;

function useResolved<T1, T2, T3, T4, T5, T6, T7, T8, T9> ( value: [T1, T2, T3, T4, T5, T6, T7, T8, T9], resolveFunction: true ): [F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>, F<T7>, F<T8>, F<T9>];
function useResolved<T1, T2, T3, T4, T5, T6, T7, T8> ( value: [T1, T2, T3, T4, T5, T6, T7, T8], resolveFunction: true ): [F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>, F<T7>, F<T8>];
function useResolved<T1, T2, T3, T4, T5, T6, T7> ( value: [T1, T2, T3, T4, T5, T6, T7], resolveFunction: true ): [F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>, F<T7>];
function useResolved<T1, T2, T3, T4, T5, T6> ( value: [T1, T2, T3, T4, T5, T6], resolveFunction: true ): [F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>];
function useResolved<T1, T2, T3, T4, T5> ( value: [T1, T2, T3, T4, T5], resolveFunction: true ): [F<T1>, F<T2>, F<T3>, F<T4>, F<T5>];
function useResolved<T1, T2, T3, T4> ( value: [T1, T2, T3, T4], resolveFunction: true ): [F<T1>, F<T2>, F<T3>, F<T4>];
function useResolved<T1, T2, T3> ( value: [T1, T2, T3], resolveFunction: true ): [F<T1>, F<T2>, F<T3>];
function useResolved<T1, T2> ( value: [T1, T2], resolveFunction: true ): [F<T1>, F<T2>];
function useResolved<T1> ( value: [T1], resolveFunction: true ): [F<T1>];
function useResolved ( value: [], resolveFunction: true ): [];

function useResolved<T1, T2, T3, T4, T5, T6, T7, T8, T9> ( value: [T1, T2, T3, T4, T5, T6, T7, T8, T9], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>, O<T7>, O<T8>, O<T9>];
function useResolved<T1, T2, T3, T4, T5, T6, T7, T8> ( value: [T1, T2, T3, T4, T5, T6, T7, T8], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>, O<T7>, O<T8>];
function useResolved<T1, T2, T3, T4, T5, T6, T7> ( value: [T1, T2, T3, T4, T5, T6, T7], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>, O<T7>];
function useResolved<T1, T2, T3, T4, T5, T6> ( value: [T1, T2, T3, T4, T5, T6], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>];
function useResolved<T1, T2, T3, T4, T5> ( value: [T1, T2, T3, T4, T5], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>, O<T4>, O<T5>];
function useResolved<T1, T2, T3, T4> ( value: [T1, T2, T3, T4], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>, O<T4>];
function useResolved<T1, T2, T3> ( value: [T1, T2, T3], resolveFunction?: false ): [O<T1>, O<T2>, O<T3>];
function useResolved<T1, T2> ( value: [T1, T2], resolveFunction?: false ): [O<T1>, O<T2>];
function useResolved<T1> ( value: [T1], resolveFunction?: false ): [O<T1>];
function useResolved ( value: [], resolveFunction?: false ): [];

function useResolved<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> ( value: [T1, T2, T3, T4, T5, T6, T7, T8, T9], callback: FN<[F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>, F<T7>, F<T8>, F<T9>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, T3, T4, T5, T6, T7, T8, R> ( value: [T1, T2, T3, T4, T5, T6, T7, T8], callback: FN<[F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>, F<T7>, F<T8>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, T3, T4, T5, T6, T7, R> ( value: [T1, T2, T3, T4, T5, T6, T7], callback: FN<[F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>, F<T7>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, T3, T4, T5, T6, R> ( value: [T1, T2, T3, T4, T5, T6], callback: FN<[F<T1>, F<T2>, F<T3>, F<T4>, F<T5>, F<T6>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, T3, T4, T5, R> ( value: [T1, T2, T3, T4, T5], callback: FN<[F<T1>, F<T2>, F<T3>, F<T4>, F<T5>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, T3, T4, R> ( value: [T1, T2, T3, T4], callback: FN<[F<T1>, F<T2>, F<T3>, F<T4>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, T3, R> ( value: [T1, T2, T3], callback: FN<[F<T1>, F<T2>, F<T3>], R>, resolveFunction: true ): R;
function useResolved<T1, T2, R> ( value: [T1, T2], callback: FN<[F<T1>, F<T2>], R>, resolveFunction: true ): R;
function useResolved<T1, R> ( value: [T1], callback: FN<[F<T1>], R>, resolveFunction: true ): R;
function useResolved<R> ( value: [], callback: FN<[], R>, resolveFunction: true ): R;

function useResolved<T1, T2, T3, T4, T5, T6, T7, T8, T9, R> ( value: [T1, T2, T3, T4, T5, T6, T7, T8, T9], callback: FN<[O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>, O<T7>, O<T8>, O<T9>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, T3, T4, T5, T6, T7, T8, R> ( value: [T1, T2, T3, T4, T5, T6, T7, T8], callback: FN<[O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>, O<T7>, O<T8>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, T3, T4, T5, T6, T7, R> ( value: [T1, T2, T3, T4, T5, T6, T7], callback: FN<[O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>, O<T7>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, T3, T4, T5, T6, R> ( value: [T1, T2, T3, T4, T5, T6], callback: FN<[O<T1>, O<T2>, O<T3>, O<T4>, O<T5>, O<T6>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, T3, T4, T5, R> ( value: [T1, T2, T3, T4, T5], callback: FN<[O<T1>, O<T2>, O<T3>, O<T4>, O<T5>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, T3, T4, R> ( value: [T1, T2, T3, T4], callback: FN<[O<T1>, O<T2>, O<T3>, O<T4>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, T3, R> ( value: [T1, T2, T3], callback: FN<[O<T1>, O<T2>, O<T3>], R>, resolveFunction?: false ): R;
function useResolved<T1, T2, R> ( value: [T1, T2], callback: FN<[O<T1>, O<T2>], R>, resolveFunction?: false ): R;
function useResolved<T1, R> ( value: [T1], callback: FN<[O<T1>], R>, resolveFunction?: false ): R;
function useResolved<R> ( value: [], callback: FN<[], R>, resolveFunction?: false ): R;

function useResolved<T> ( value: T, resolveFunction: true ): F<T>;
function useResolved<T> ( value: T, resolveFunction?: false ): O<T>;

function useResolved<T, R> ( value: T, callback: FN<[F<T>], R>, resolveFunction: true ): R;
function useResolved<T, R> ( value: T, callback: FN<[O<T>], R>, resolveFunction?: false ): R;

function useResolved ( values, callback, resolveFunction?: boolean ) {

  const isResolvable = ( resolveFunction === true || callback === true ) ? isFunction : isObservable;
  const resolve = value => isResolvable ( value ) ? value () : value;

  if ( Array.isArray ( values ) ) {

    const resolved = values.map ( resolve );

    if ( isFunction ( callback ) ) {

      return callback.apply ( undefined, resolved );

    } else {

      return resolved;

    }

  } else {

    const resolved = resolve ( values );

    if ( isFunction ( callback ) ) {

      return callback ( resolved );

    } else {

      return resolved;

    }

  }

}

/* EXPORT */

export default useResolved;
