// قم بإنشاء الدالة التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

    let name = prompt(`your name`);
    greet(name);
 function greet(){
     alert(`hello`);
 }

function greet(name) {
    alert(`hello ${name}`);
}
