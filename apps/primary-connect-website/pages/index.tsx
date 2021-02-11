import React from 'react';
import { DatePicker, Button } from 'antd';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

export default function Index() {
  const router = useRouter();
  console.log('ROUTER', router);
  return (
    <div className={styles.page}>
      <h2>Resources &amp; Tools</h2>
      <div style={{ marginTop: 50 }}>
        <DatePicker></DatePicker>
        <Button>Search</Button>
      </div>
    </div>
  );
}
