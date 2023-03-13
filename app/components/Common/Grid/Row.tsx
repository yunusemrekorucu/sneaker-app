import React, {FC, memo, ReactNode} from 'react';

import {Block} from '@/components';

type Props = {
  children: ReactNode;
};

const Row: FC<Props | any> = props => {
  const {children} = props;

  return (
    <Block w="100%" fd="row" {...props}>
      {children}
    </Block>
  );
};

export default memo(Row);
