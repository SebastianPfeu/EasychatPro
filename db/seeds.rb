# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Message.destroy_all
User.destroy_all
Channel.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

channel_names = %w[general paris react]
emails = %w[sebastian@gmail.com david@gmail.com max@gmail.com]

channels = channel_names.map do |channel_name|
  Channel.create(name: channel_name)
end

puts "#{Channel.count} channels have been added"

users = emails.map do |email|
  User.create(email: email, password: '123456')
end

puts "#{User.count} users have been added"

20.times do
  Message.create(content: 'This is a test message', channel: channels.sample, user: users.sample)
end

puts "#{Message.count} messages have been added"
