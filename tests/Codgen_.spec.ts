import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('sai@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://www.facebook.com/two_step_verification/authentication/?encrypted_context=AWRMo0VU6TKuZqB_0nOjVYg6kI3mtyB9LJCiarcX5ZN3DhbTvRMCbBMSneOpeAlmJxVMURUV36K5SIohYQQI5ZQxMy3RrFklLa3K3IAUd8XWWSj92TRqt3D4Dq4_e0PLT68ourNFTvZInkhM4XNw5AwcYWV_3D0otHQx-y87fjkkT5jLdPWnG6VR-z5bxkHof_9QlKAtxzwH5Zkmimdqb5f1pHVAgsPwtS641sxjQlKbSs23RMEv8Emlgz7p7mvrBtj0ZwXoBShZgcmWo23Oks7JSWBGaKKiO_qiC95f14aZoTgRKQSK1y0Z4fz7URkgcEkKKCoCZqdktNz-BIGlUgnZhgqv_6RtcwizgIVpO8cvEDvAW3dxWBHYDO8ULLK0Ilkpql9rWgrCg0LouJE07FUiLn4tfvqPPLWJFMsMyVlDGHHK9FJ3nSj65mBUKV5zilfnMvByKPJO4GbORZUHVunhGGSYqDYUG96VwSDsXO-_GH1rfp9HU0gX9YCO9CAQoGLG93wDTTv60ZU533N871z0ybQhlVL1IX3AXYLQHuy8wAUjgFi4W52BKgN5XyHllHd7Nbj8m8BbXpvAMyc4sSmwtvnnzSoWvZsid9cnPGL7x9eGIlqKVR27wBGVon5ps9nbZHP0KVqCdSP1DvunueI3VT3auHBR_gOVyBsQpR1HISELI3CNRZWwaWbr7SZsAGZWDSGqpsk4cnY1Y00PK2nlcGOInGk-xlEGwnOdhy6J_sZ6md7ntvZ2lGaYYOtICsH3kgnNLgVyDAlVf8FkA13I8JFW_7qr3TAJrLyEtgSCojjfr44uultmk_uN3T3zpIHzcvy0UAu5k-ft6YwE4ZXueBwZEXdyaYVAL1iL0257vyhGgbMZW2kDqJA4AzvJhT__08o_KCflOcGjjxLkvFMMnN2h8udFpqcqA2Bhc5EOYZLZcIdT7EcZrqtZzzD9FSLdW1e8W7f4bhT--jCZjNfgNcCkKnGIH5WuCNRQdbtQJAAuwtHlvLhaGW47stFzJhQFXreSxx9K1bhyCkszn95A0Si971e0aSgtY92x6GBPzwzD2lxA6oa9fGc_44ebuF6KKVOV5sQZhXMYSoxgTDxsX4Mie57-UGwU3Mu7Ejdp74-R18YA30pQrRDAoiuI8BZaMFiMJLFsWLVlqgHXS68IVBJuCo6rBmP8LwxOHHEYjke2JDLsL3Qz6EGpXBwCEIOGBOdXeIINQVmW3HM7oJVYHpK47VSaHBNi_VfxmU79&flow=pre_authentication&next');
});