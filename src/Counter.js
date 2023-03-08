import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);

  const [disLike, setDisLike] = useState(0);



  return (
    <div className='counter-container'>
      <IconButton>
        <Badge badgeContent={like} color="secondary">
          <ThumbUpOffAltIcon onClick={() => setLike(like + 1)} color="primary" />&nbsp;
        </Badge>
      </IconButton>
      <IconButton>
        <Badge badgeContent={disLike} color="secondary">
          <ThumbDownOffAltIcon onClick={() => setDisLike(disLike + 1)} color="error" />&nbsp;
        </Badge>
      </IconButton>
      
    </div>
  );
}
