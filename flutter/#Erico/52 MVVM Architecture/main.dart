import 'package:belajar/bloc/user_bloc.dart';
import 'package:belajar/ui/main_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: BlocProvider(builder: (context) => UserBloc(),
      child: MainPage(),)
    );
  }
}