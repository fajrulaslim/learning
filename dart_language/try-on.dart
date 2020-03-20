/// //////////////////////////////////
/// Nama File: try-on.dart
/// //////////////////////////////////

import 'dart:io';

void main() {
  int a, b, c;

  stdout.write('Masukkan nila a: ');
  a = int.parse(stdin.readLineSync());

  stdout.write('Masukkan nila b: ');
  b = int.parse(stdin.readLineSync());

  try {
    c = a ~/ b;
    print('$a ~/ $b = $c');
  } on IntegerDivisionByZeroException {
    print('SALAH: terjadi pembagian dengan nilai 0');
  }
}
