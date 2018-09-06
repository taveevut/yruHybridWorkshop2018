# อบรมการเขียนโปรแกรมบนอุปกรณ์สื่อสารไร้สาย Smart Phone-Hybrid Apps

<p align="center">
  <img src="http://nakomah.com/github/yruHybridWorkshop2018.jpg">
</p>

- สร้างหน้า Profile //สร้างหน้าเพื่อเรียนรู้การกาหนดรูปแบบแตะละหน้าด้วย CSS
- สร้างหน้า Camera // สร้างหน้าเพื่อเรียนรู้การใช้งาน Plugin Camera
- สร้างหน้า QR Code //สร้างหน้าเพื่อเรียนรู้การใช้งาน QrCodeScan (Create & Scan) 
- สร้างหน้า News //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ GET (การดึงข่าวสารมาแสดง)
- สร้างหน้า Course //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ GET (การดึงคอส์สเรียนมาแสดง)
- สร้างหน้า Todos//สร้างหน้าเพื่อเรียนรู้การใช้งาน Local Storage
- สร้างหน้า Login //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ POST (Login Page)
- สร้างหน้า Register //สร้างหน้าเพื่อเรียนรู้การใช้งาน Service Provider แบบ POST (Register Page)
- สร้างหน้า Youtube //สร้างหน้าเพื่อเรียนรู้การใช้งาน Youtube Ifram
- การนำ [Font Awesome](https://fontawesome.com/v4.7.0/) มาประยุคใช้งานกับ ionic Framwork

# ขั้นตอนการติดตั้ง
- clone project
```sh
$ git clone </path/to/repository>
```

- Reload Package.json
```sh
$ npm install
```
<!---
- แสดงผลแอพฯ
```sh
$ ionic serve
```

- เพิ่ม Platforms ที่เราต้องการ Build
```sh
$ ionic cordova platform add android
```

- update resources
```sh
$ ionic cordova resources android
```

- build App
```sh
$ ionic cordova build android
```
--->

# ionic Framwork - คำสั่งที่ใช้งานบ่อย
- การสร้างโปรเจคใหม่
```sh
$ ionic start <ชื่อโปรเจค> <template blank|sidemenu|tabs>
```

- การสั่งรัน Application ไปที่ Browser แล้วกด Enter `หากต้องการยกเลิกคาสั่งรัน Application ให้กดปุ่ม Ctrl + C`
```sh
$ ionic serve
```

- การสร้างหน้าใหม่(New Page)
```sh
$ ionic g page <ชื่อหน้า> --no-module
```

- เพิ่ม Platforms ที่เราต้องการ Build
```sh
$ ionic cordova platform add <ชื่อเพลตฟอม : android|ios>
```

> Note: การเพิ่ม platform ถ้าเป็น android เราต้องติดตั้ง 
> Android Studio และต้องติดตั้ง Android SDK ก่อน

- update resources
```sh
$ ionic cordova resources <ชื่อเพลตฟอม : android|ios>
```

- build App
```sh
$ ionic cordova build <ชื่อเพลตฟอม : android|ios>
```

# การสร้างไฟล์ APK สำหรับนำขึ้น Android PlayStore
- https://www.youtube.com/watch?v=1leOrcJbfng
- https://www.youtube.com/watch?v=7A2J7gDKIUs
- https://www.youtube.com/watch?v=uFwHFLBZBvk