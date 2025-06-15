import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('http://40.81.252.10/');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
