import 'package:flutter/material.dart';
import 'package:flutter_chat/views/register_screen.dart';
import 'views/chat_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp() : super();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Chat with Node Js',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: RegisterScreen(),
    );
  }
}
